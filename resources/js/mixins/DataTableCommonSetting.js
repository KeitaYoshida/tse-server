const _data_table_common_setting = {

    com: {
        page_title: '共通リストページ',
        page_class: 'com-data-table',
        info: null,
        view_row_setting: [
            5,
            50,
            100,
            {
                text: "$vuetify.dataIterator.rowsPerPageAll",
                value: -1
            }
        ],
        no_data_text: "loading ... ",
    },
    item_list: {
        page_title: '共通リストページ',
        headers: [{
                text: "品目コード",
                align: "center",
                value: "item_code"
            },
            {
                text: "ＲＥＶ",
                align: "center",
                value: "item_rev"
            },
            {
                text: "品名",
                align: "center",
                value: "item_name"
            },
            {
                text: "型式",
                align: "center",
                value: "item_model"
            },
            {
                text: "在庫数",
                align: "center",
                value: "order_code"
            },
        ],
    }
}
export default {
    data() {
        return {
            dt_mix_com: _data_table_common_setting,
        }
    }
}
