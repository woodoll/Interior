import React, { useState, useRef } from 'react';
import { Table, Input, Button, Form, Typography, Upload } from 'antd';
import ImgCrop from 'antd-img-crop';

const EditableCell = ({
  editing,
  dataIndex,
  title,
  record,
  index,
  children,
  ...restProps
}) => {
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: false,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          <Input />
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const TableAdd = ({ setTableData }) => {
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image',
      status: 'done',
      url: '',
    },
  ]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  const columns = [
    {
      title: '상품명',
      dataIndex: 'productNm',
      editable: true,
      fontSize: '0.5rem',
      fixed: 'left',
    },
    {
      title: '자체상품코드',
      dataIndex: 'displayOrder',
      editable: true,
    },
    {
      title: '색상계열',
      dataIndex: 'colorCode',
      editable: true,
    },
    {
      title: '정가',
      dataIndex: 'listPrice',
      editable: true,
    },
    {
      title: '할인율',
      dataIndex: 'discountContents',
      editable: true,
    },
    {
      title: '판매가격',
      dataIndex: 'sellingPrice',
      editable: true,
    },
    {
      title: '재고관리여부',
      dataIndex: 'stockYn',
      editable: true,
    },
    {
      title: '재고수량',
      dataIndex: 'stock',
      editable: true,
    },
    {
      title: '대표이미지',
      dataIndex: 'thumbnail',
      editable: true,
      render: (recode) => {
        return (
          <ImgCrop rotate>
            <Upload
              listType="picture-card"
              fileList={fileList}
              onChange={onChange}
              onPreview={onPreview}
            >
              {fileList.length < 1 && '+ Upload'}
            </Upload>
          </ImgCrop>
        );
      },
    },
    {
      title: '상세설명',
      dataIndex: 'detailContents',
      editable: true,
    },
    {
      title: '수정',
      dataIndex: 'edit',
      fixed: 'right',
      width: '100px',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              저장
            </Typography.Link>
            <Typography.Link onClick={cancel}>취소</Typography.Link>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ''}
            onClick={() => edit(record)}
          >
            수정
          </Typography.Link>
        );
      },
    },
    {
      title: '추가/제거',
      dataIndex: 'operation',
      fixed: 'right',
      width: '100px',
      render: (_, record) =>
        record.key > 0 ? (
          <Button
            style={{ width: '50', fontSize: '0.75rem' }}
            onClick={() => handleDelete(record)}
          >
            삭제
          </Button>
        ) : (
          <Button
            style={{ width: '50', fontSize: '0.75rem' }}
            type={'primary'}
            onClick={() => handleAdd(record)}
          >
            추가
          </Button>
        ),
    },
  ];

  const productsData = [
    {
      productNm: '',
      displayOrder: '',
      colorCode: '',
      listPrice: '',
      discountRate: '',
      sellingPrice: '',
      stockYn: '',
      stock: '',
      detailContents: '',
      thumbnail: '',
    },
  ];

  const nextKey = useRef(1);

  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState('');

  const [dataSource, setDataSource] = useState(productsData);

  const handleDelete = (delData) => {
    setDataSource(dataSource.filter((item) => item.key !== delData.key));
  };
  const handleAdd = () => {
    const newData = {
      key: nextKey.current,
      productNm: '',
      displayOrder: '',
      colorCode: '',
      listPrice: '',
      discountContents: '',
      sellingPrice: '',
      stockYn: '',
      stock: '',
      thumbnail: '',
      detailContents: '',
    };
    nextKey.current += 1;
    setDataSource(dataSource.concat(newData));
    console.log(dataSource);
  };

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      productNm: '',
      displayOrder: '',
      colorCode: '',
      listPrice: '',
      discountContents: '',
      sellingPrice: '',
      stockYn: '',
      stock: '',
      thumbnail: '',
      detailContents: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...dataSource];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setDataSource(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setDataSource(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const components = {
    body: {
      cell: EditableCell,
    },
  };
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        // inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  setTableData(dataSource);

  return (
    <Form form={form} components={false}>
      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={dataSource}
        columns={mergedColumns}
        scroll={{ x: 1500 }}
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

export default TableAdd;
