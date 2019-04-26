const _data_table_common_setting = {

    com: {
        page_title: '共通リストページ',
        page_class: 'com-data-table',
        info: null,
        view_row_setting: [
            7,
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
                value: "itemCode"
            },
            {
                text: "品名",
                align: "center",
                value: "itemName"
            },
            {
                text: "型式",
                align: "center",
                value: "itemModelName"
            },
            {
                text: "手配先",
                align: "center",
                value: "orderName"
            },
            {
                text: "在庫数",
                align: "center",
                value: "stockNum"
            },
            {
                text: "工事割当数",
                align: "center",
                value: "reservationNum"
            },
            {
                text: "金額",
                align: "center",
                value: "price",
                sortable: false
            }
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
