<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class InventoryData extends Controller
{
  public function BuzaiOrderList()
  {
    $sql = <<<__text__
SELECT
	a.item_code,
  a.item_rev,
  c.item_id,
	c.item_name,
	c.item_model,
	sum( a.num_recept - a.num_maked ) as need_num,
  sum( a.num_inv ) as sum_inv,
  sum( (a.num_recept - a.num_maked) * a.order_price) as need_price,
  sum( a.num_inv * a.order_price) as inv_price,
	ROUND( sum( a.num_inv ) / sum( a.num_recept ) * 100 ) as per
FROM
	cnt_orders AS a
	LEFT JOIN cnt_order_lists AS b ON a.cnt_order_code = b.cnt_order_code
	LEFT JOIN items AS c ON a.item_code = c.item_code 
WHERE
	b.cnt_status = 1 
	and a.cnt_order_code <> 'etc'
	AND a.num_recept > 0 
GROUP BY
	a.item_code,
	a.item_rev;
__text__;
    return DB::select($sql);
  }

  public function BuzaiEtcList()
  {
    $sql = <<<__text__
SELECT
	a.item_code,
	a.item_rev,
  c.item_id,
	c.item_name,
	c.item_model,
	c.last_num,
	c.inv_num - a.num_inv as cnt_inv_now,
	a.num_inv,
	a.num_inv * a.order_price AS inv_price,
	ROUND( (a.num_inv ) / (c.last_num - (c.inv_num - a.num_inv) ) * 100 ) as per
FROM
	cnt_orders AS a
	LEFT JOIN items AS c ON a.item_code = c.item_code 
WHERE
	a.cnt_order_code = 'etc';
__text__;
    return DB::select($sql);
  }

  public function BuzaiCntList()
  {
    $sql = <<<__text__
SELECT
	'形式' as keishiki,
	a.cnt_order_code,
	SUM( CASE WHEN 
		a.num_recept = 99999 THEN 0
	ELSE ( a.num_recept - a.num_maked ) * a.order_price END) AS last_price,
	SUM(a.num_inv * a.order_price) AS inv_price
FROM
	cnt_orders AS a
	LEFT JOIN cnt_order_lists AS b ON a.cnt_order_code = b.cnt_order_code
	LEFT JOIN items AS c ON a.item_code = c.item_code 
WHERE
	b.cnt_status = 1 
	AND a.num_recept > 0
GROUP BY cnt_order_code;
__text__;
    return DB::select($sql);
  }

  public function OrderListOne($id)
  {
    $sql = <<<__text__
SELECT
	a.assy_code,
	a.assy_num,
	a.item_code,
	c.item_name,
	c.item_model,
	a.order_price,
	a.num_recept,
	a.num_maked,
	a.num_inv,
	a.num_inv * a.order_price as price
FROM
	cnt_orders As a
	LEFT JOIN items AS c ON a.item_code = c.item_code 
WHERE 
  a.cnt_order_code = "{$id}"
AND
  a.num_recept > 0 
ORDER BY a.assy_code, a.assy_num;
__text__;
    return DB::select($sql);
  }

  public function BuzaiInvHis()
  {
    $sql = <<<__text__
SELECT 
	CASE WHEN count_num < 0 THEN 'm'
	ELSE 'p' END AS `flg`,
	a.*,
	c.item_name,
	c.item_model
FROM 
	item_count_history as a
	LEFT JOIN items AS c ON a.item_code = c.item_code AND a.item_rev = c.item_rev
WHERE
	DATE_ADD(add_time,INTERVAL 15 DAY)
ORDER BY add_time DESC;
__text__;
    return DB::select($sql);
  }
}
