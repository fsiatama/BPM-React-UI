import { PlusOutlined } from '@ant-design/icons';
import { Button, message, Drawer, Timeline, Typography } from 'antd';
import moment from 'moment'
import React, { useState, useRef } from 'react';
import { useIntl, FormattedMessage, useModel } from 'umi';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { ModalForm, ProFormSwitch, ProFormTextArea } from '@ant-design/pro-form';
import ProDescriptions from '@ant-design/pro-descriptions';
import UpdateForm from './components/UpdateForm';
import { updateRule, removeRule } from '@/services/ant-design-pro/api';
import { osList, osStart } from '@/services/service-orders/api';

const { Text } = Typography;


/**
 * @en-US Add node
 * @param fields
 */

const handleAdd = async (fields) => {
  const hide = message.loading('Adding');

  try {
    await osStart({ ...fields });
    hide();
    message.success('Added successfully');
    return true;
  } catch (error) {
    hide();
    message.error('Adding failed, please try again!');
    return false;
  }
};
/**
 * @en-US Update node
 *
 * @param fields
 */

const handleUpdate = async (fields) => {
  const hide = message.loading('Configuring');

  try {
    await updateRule({
      name: fields.businessKey,
      desc: fields.description,
      key: fields.businessKey,
    });
    hide();
    message.success('Configuration is successful');
    return true;
  } catch (error) {
    hide();
    message.error('Configuration failed, please try again!');
    return false;
  }
};

/**
 *  Delete node
 *
 * @param selectedRows
 */

const handleRemove = async (selectedRows) => {
  const hide = message.loading('deleting');
  if (!selectedRows) return true;

  try {
    await removeRule({
      key: selectedRows.map((row) => row.id),
    });
    hide();
    message.success('Deleted successfully and will refresh soon');
    return true;
  } catch (error) {
    hide();
    message.error('Delete failed, please try again');
    return false;
  }
};

const TableList = () => {
  /**
   * @en-US Pop-up window of new window
   *  */
  const [createModalVisible, handleModalVisible] = useState(false);
  /**
   * @en-US The pop-up window of the distribution update window
   * */
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const [updateModalVisible, handleUpdateModalVisible] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const actionRef = useRef();
  const [currentRow, setCurrentRow] = useState();
  const [selectedRowsState, setSelectedRows] = useState([]);
  /**
   * @en-US International configuration
   * */

  const isAdmin = currentUser?.access === 'admin';

  const intl = useIntl();
  const columns = [
    {
      title: 'OS Id',
      dataIndex: 'businessKey',
      tip: 'The OS Id is the unique key',
      render: (dom, entity) => {
        return (
          <a
            onClick={() => {
              setCurrentRow(entity);
              setShowDetail(true);
            }}
          >
            {dom}
          </a>
        );
      },
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.titleUpdatedAt"
          defaultMessage="Last scheduled time"
        />
      ),
      sorter: true,
      dataIndex: 'startTime',
      valueType: 'dateTime'
    },
    {
      title: (
        <FormattedMessage
          id="pages.searchTable.titleEndedAt"
          defaultMessage="Last scheduled time"
        />
      ),
      sorter: true,
      dataIndex: 'endTime',
      valueType: 'dateTime'
    },

    {
      title: 'Estado',
      sorter: true,
      dataIndex: 'state',
    },
    {
      dataIndex: 'history',
      hideInTable: true,
      render: (_, row) => {
        const data = []

        row.history.map((item) => {
          if(item.activityType === 'userTask' || item.activityType === 'startEvent' || item.activityType === 'task') {
            data.push(item)
          }
        })
        

        // return <Table dataSource={data} columns={columns} />
        return (
          <Timeline>
              {
                  data.map(function(e, index) {
                      if( e.activityType === 'startEvent') {
                        return (
                          <Timeline.Item key={ index } color= 'yellow'>
                              <p>{e.activityName}
                              </p>
                              <Text italic>{moment(e.startTime).format("YYYY-MM-DD HH:mm")}</Text>
                          </Timeline.Item>
                        );
                      }
                      else if( !e.assignee) {
                        return (
                          <Timeline.Item key={ index } color= 'green'>
                              <p>{e.activityName}
                              </p>
                              <Text italic>{moment(e.startTime).format("YYYY-MM-DD HH:mm")}</Text> { ' - ' }
                              <Text italic>{moment(e.endTime).format("YYYY-MM-DD HH:mm")}</Text>
                          </Timeline.Item>
                        );
                      }
                      else if (e.endTime !== null) {
                        return (
                            <Timeline.Item key={ index } color= 'blue'>
                                <p>{e.activityName} <br /> <Text code>{e.assignee}</Text>
                                </p>
                                <Text italic>{moment(e.startTime).format("YYYY-MM-DD HH:mm")}</Text> { ' - ' }
                                <Text italic>{moment(e.endTime).format("YYYY-MM-DD HH:mm")}</Text>
                            </Timeline.Item>
                        );
                      } else {
                        return (
                          <Timeline.Item key={ index } color= 'red'>
                              <p>{e.activityName} <br /> <Text code>{e.assignee}</Text>
                              </p>
                              <Text italic>{moment(e.startTime).format("YYYY-MM-DD HH:mm")}</Text>
                          </Timeline.Item>
                        );
                      }
                  })
              }            
          </Timeline>
        )
        // return []
      }
    },
  ];
  return (
    <PageContainer>
      <ProTable
        headerTitle='Ordenes de Servicio'
        actionRef={actionRef}
        rowKey="id"
        toolBarRender={() => isAdmin ? [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              handleModalVisible(true);
            }}
          >
            <PlusOutlined /> <FormattedMessage id="pages.searchTable.new" defaultMessage="New" />
          </Button>,
        ]: []}
        request={async () => {
          return osList()
        }}
        columns={columns}
        search={false}
        rowSelection={{
          onChange: (_, selectedRows) => {
            setSelectedRows(selectedRows);
          },
        }}
      />
      {selectedRowsState?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              <FormattedMessage id="pages.searchTable.chosen" defaultMessage="Chosen" />{' '}
              <a
                style={{
                  fontWeight: 600,
                }}
              >
                {selectedRowsState.length}
              </a>{' '}
              <FormattedMessage id="pages.searchTable.item" defaultMessage="项" />
            </div>
          }
        >
          <Button
            onClick={async () => {
              await handleRemove(selectedRowsState);
              setSelectedRows([]);
              actionRef.current?.reloadAndRest?.();
            }}
          >
            <FormattedMessage
              id="pages.searchTable.batchDeletion"
              defaultMessage="Batch deletion"
            />
          </Button>
          <Button type="primary">
            <FormattedMessage
              id="pages.searchTable.batchApproval"
              defaultMessage="Batch approval"
            />
          </Button>
        </FooterToolbar>
      )}
      <ModalForm
        title= 'Nueva Orden de servicio'
        width="400px"
        visible={createModalVisible}
        onVisibleChange={handleModalVisible}
        onFinish={async (value) => {
          const success = await handleAdd(value);

          if (success) {
            handleModalVisible(false);

            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
      >
        <ProFormTextArea width="md" name="comment" label="Anotación" rules={[
                  {
                    required: true,
                    message: (
                      <FormattedMessage
                        id="pages.searchTable.comment.required"
                        defaultMessage="please enter a description!"
                      />
                    ),
                  },
                ]}/>
        <ProFormSwitch name="transferencia" label="Es transferencia?" />
        <ProFormSwitch name="inventario" label="Hay inventario?" />
        <ProFormSwitch name="electronico" label="Es medio electrónico?" />
      </ModalForm>
      <UpdateForm
        onSubmit={async (value) => {
          const success = await handleUpdate(value);

          if (success) {
            handleUpdateModalVisible(false);
            setCurrentRow(undefined);

            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        onCancel={() => {
          handleUpdateModalVisible(false);

          if (!showDetail) {
            setCurrentRow(undefined);
          }
        }}
        updateModalVisible={updateModalVisible}
        values={currentRow || {}}
      />

      <Drawer
        width={600}
        visible={showDetail}
        onClose={() => {
          setCurrentRow(undefined);
          setShowDetail(false);
        }}
        closable={false}
      >
        {currentRow?.businessKey && (
          <ProDescriptions
            column={1}
            title={currentRow?.businessKey}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.businessKey,
            }}
            columns={columns}
          />
        )}
      </Drawer>
    </PageContainer>
  );
};

export default TableList;
