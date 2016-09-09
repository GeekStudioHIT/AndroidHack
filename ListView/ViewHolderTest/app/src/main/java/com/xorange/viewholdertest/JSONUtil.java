package com.xorange.viewholdertest;

import android.util.Log;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.ArrayList;

/**
 * Created by voidhug on 16/8/27.
 */

public class JSONUtil {
    public static ArrayList<HotelBean> getHotels(String str){
        ArrayList<HotelBean> hotles=new ArrayList<HotelBean>();
        try {
            //由Json对象获取JsonArray
            JSONArray jsonArr = new JSONArray(str);
            Log.d("Sybil", jsonArr.length() + " +++++++++++");
            //遍历数组获得每一个jsonObject对象
            for (int i = 0; i < jsonArr.length(); i++) {
                JSONObject personObj = jsonArr.getJSONObject(i);
                String price = personObj.getString("room_min_price");
                String name=personObj.getString("hotel_name");
                String score = personObj.getString("recommend_score");
                String picUrl = personObj.getString("picture");
                String hotelUrl = personObj.getString("url");
                HotelBean hotel=new HotelBean();
                hotel.setImageUrl(picUrl);
                hotel.setHotelUrl(hotelUrl);
                hotel.setName(name);
                hotel.setPrice(price);
                hotel.setScore(score);
                hotles.add(hotel);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return hotles;
    }
}
