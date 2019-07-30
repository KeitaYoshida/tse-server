export default {
  data() {
    return {
      i: null,
      item_data: null,
      vendor: [],
    }
  },
  async created() {
  },
  methods: {
    async get_item_data() {
      await axios
        .get("/items/iteminfo/" + this.item_code + "/" + this.item_rev)
        .then(response => {
          this.i = response.data[0];
          this.item_data = [
            {
              icon: "fas fa-barcode",
              title: "部材シリアル",
              name: 'item_id',
              value: response.data[0].item_id
            },
            {
              icon: "fas fa-info",
              title: "品目コード",
              name: 'item_code',
              value: response.data[0].item_code
            },
            {
              icon: "fas fa-arrow-alt-circle-up",
              title: "Rev",
              name: 'item_rev',
              value: this.get__chk(response.data[0].item_rev)
            },
            {
              icon: "fas fa-info",
              title: "手配コード",
              name: 'order_code',
              value: response.data[0].order_code
            },
            {
              icon: "fas fa-id-badge",
              title: "品名",
              name: "item_name",
              value: response.data[0].item_name
            },
            {
              icon: "fas fa-id-card",
              title: "品目形式",
              name: "item_model",
              value: response.data[0].item_model
            },
            {
              icon: "fas fa-map-marked",
              title: "製造元",
              name: "maker_name",
              value: response.data[0].maker_name
            },
            {
              icon: "fas fa-arrows-alt-h",
              title: "RT",
              name: "read_time",
              value: this.get__chk(response.data[0].read_time)
            },
            {
              icon: "fas fa-calculator",
              title: "在庫数",
              name: "last_num",
              value: this.get__chk(response.data[0].last_num)
            },
            {
              icon: "fas fa-calculator",
              title: "使用予約数",
              name: "appo_num",
              value: this.get__chk(response.data[0].appo_num)
            },
            {
              icon: "fas fa-map-signs",
              title: "ＬＯＴ手配数",
              name: "lot_num",
              value: response.data[0].lot_num
            },
            {
              icon: "fas fa-map-signs",
              title: "最小保持数",
              name: "minimum_set",
              value: response.data[0].minimum_set
            },
            {
              icon: "fas fa-map-signs",
              title: "手配方法",
              name: "order_way",
              value: this.get__orderway(
                response.data[0].lot_num,
                response.data[0].minimum_set
              )
            },
            {
              icon: "fas fa-map-marker-alt",
              title: "保管場所",
              name: "location",
              value: this.get__chk(response.data[0].location)
            }
          ];
          if (response.data[0].vendor) {
            response.data[0].vendor.forEach(ob => {
              this.item_data.push({
                icon: "fas fa-money-bill-wave",
                title: "手配金額",
                name: "order_prices",
                edit: true,
                value:
                  "[" + ob.vendname.com_name + "] " + ob.vendor_item_price + " ¥"
              });
              this.vendor.push({
                item_id: ob.item_id,
                vendor_code: ob.vendor_code,
                com_name: ob.vendname.com_name,
                vendor_item_price: ob.vendor_item_price,
                order_add_date: ob.order_add_date
              });
            });
          }
        })
        .catch(error => {
          console.log("Error : " + error);
        });

    },
    out(arr) {
      arr.forEach(id => {
        const index = this.item_data.findIndex(v => v.name === id);
        if (index !== -1) {
          this.item_data.splice(index, 1);
        }
      });
    },
    get_serial() {
      return this.item_data[
        this.item_data.findIndex(v => v.name === "item_id")
      ].value;
    },
    selecter(arr) {
      return this.item_data.filter((v) => arr.includes(v.name));
    }
  },
}