const TEXT_COLOR = 'white--text';
// const COLOR_TEAL_CLASS_2 = 'blue lighten-2';
const BUTON_TEXT = 'VIEW';
const COLOR_DEF = 'blue lighten-2'

const _card_data = {
    item_list: {
        title: "部材リスト",
        class_text: COLOR_DEF,
        color: TEXT_COLOR,
        text: '部材リストの一覧を表示',
        details: ["部材の検索、残数、工事割当数、手配・受入済み数量の確認ができます"].join(""),
        links: "/data_table",
        button: false,
        button_text: BUTON_TEXT
    },
    accepted: {
        title: "受入",
        class_text: COLOR_DEF,
        color: TEXT_COLOR,
        text: "部材の受入処理を行う",
        details: [
            "手配した工事を元に受入処理を行えます。",
            "対象の手配工事を選択すると手配一覧リストが表示されます。",
            "表示されたリストより受け入れる部材をチェックし、",
            "画面下部の受入ボタンを押下してください。",
            "受入数量の変更がある場合は、リスト右部の編集コマンドを押してください。"
        ].join(""),
        links: "/data_table",
        button: false,
        button_text: BUTON_TEXT
    },
    marshalling: {
        title: "マーシャリング",
        class_text: COLOR_DEF,
        color: TEXT_COLOR,
        text: "部材のマーシャリングを行う",
        details: [
            "手配した工事を元にマーシャリング処理を行えます。",
            "対象の手配工事を選択すると手配一覧リストが表示されます。",
            "表示されたリストよりマーシャリングする部材をチェックし、",
            "画面下部の決定ボタンを押下してください。",
            "受入数量の変更がある場合は、リスト右部の編集コマンドを押してください。"
        ].join(""),
        links: "/data_table",
        button: false,
        button_text: BUTON_TEXT
    },
    aggregate_const: {
        title: "集計 - 工事",
        class_text: COLOR_DEF,
        color: TEXT_COLOR,
        text: ["棚卸等の集計作業を行う", "（工事）"],
        details: ["部材の検索、残数、工事割当数、手配・受入済み数量の確認ができます"].join(""),
        links: "/data_table",
        button: false,
        button_text: BUTON_TEXT
    },
    aggregate_etc: {
        title: "集計 - その他・残物品",
        class_text: COLOR_DEF,
        color: TEXT_COLOR,
        text: ["棚卸等の集計作業を行う", "（その他・残物品）"],
        details: ["部材の検索、残数、工事割当数、手配・受入済み数量の確認ができます"].join(""),
        links: "/data_table",
        button: false,
        button_text: BUTON_TEXT
    },
    video_test: {
        title: "video test",
        class_text: COLOR_DEF,
        color: TEXT_COLOR,
        text: ["棚卸等の集計作業を行う", "（その他・残物品）"],
        details: ["部材の検索、残数、工事割当数、手配・受入済み数量の確認ができます"].join(""),
        links: "",
        button: false,
        button_text: BUTON_TEXT
    }
}

export default {
    data() {
        return {
            card_data: _card_data,
        }
    }
}
