import React, { useEffect } from "react";
import { connect } from "dva";
import { Layout, Breadcrumb, Button, Icon, Table } from 'antd';
const { Content } = Layout;

function Type(props) {
    useEffect(() => {
        console.log(props.getQuestionsType)
        props.getQuestionsType()
    }, [])

    const columns = [
        {
          title: '类型ID',
          dataIndex: 'questions_type_id',
        },
        {
          title: '类型名称',
          dataIndex: 'questions_type_text',
        },
        {
          title: '操作',
          dataIndex: '操作',
        },
      ];
      const data = props.questions_type;
    return (
        <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>试题分类</Breadcrumb.Item>
            </Breadcrumb>
            <Content
                style={{
                    background: '#fff',
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                }}
            >
                <Button type="primary">
                    <Icon type="plus" />添加类型
                </Button>
                <div>
                <Table rowKey={"questions_type_id"} columns={columns} dataSource={data} />,
                </div>,
            </Content>
        </Layout>

    )
}
const MapState = state => {
    return {
        ...state.question
    }
}
const MapDispatch = dispatch => ({
    getQuestionsType() {
        dispatch({
            type: "question/getQuestionsType",
        })
    }
})
export default connect(MapState, MapDispatch)(Type)