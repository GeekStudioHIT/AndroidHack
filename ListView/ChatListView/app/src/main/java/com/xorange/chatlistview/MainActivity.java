package com.xorange.chatlistview;

import android.graphics.BitmapFactory;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.ListView;

import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity {

    private ListView mListView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        
        mListView = (ListView) findViewById(R.id.listView_chat);
        
        ChatListViewItemBean bean1 = new ChatListViewItemBean();
        bean1.setType(0);
        bean1.setIcon(BitmapFactory.decodeResource(getResources(), R.drawable.in_icon));
        bean1.setText("Hello how are you");

        ChatListViewItemBean bean2 = new ChatListViewItemBean();
        bean2.setType(1);
        bean2.setIcon(BitmapFactory.decodeResource(getResources(),
                R.mipmap.ic_launcher));
        bean2.setText("Fine thank you, and you?");

        ChatListViewItemBean bean3 = new ChatListViewItemBean();
        bean3.setType(0);
        bean3.setIcon(BitmapFactory.decodeResource(getResources(),
                R.drawable.in_icon));
        bean3.setText("I am fine too");

        ChatListViewItemBean bean4 = new ChatListViewItemBean();
        bean4.setType(1);
        bean4.setIcon(BitmapFactory.decodeResource(getResources(),
                R.mipmap.ic_launcher));
        bean4.setText("Bye bye");

        ChatListViewItemBean bean5 = new ChatListViewItemBean();
        bean5.setType(0);
        bean5.setIcon(BitmapFactory.decodeResource(getResources(),
                R.drawable.in_icon));
        bean5.setText("See you");

        List<ChatListViewItemBean> data = new ArrayList<>();
        data.add(bean1);
        data.add(bean2);
        data.add(bean3);
        data.add(bean4);
        data.add(bean5);
        mListView.setAdapter(new ChatItemListViewAdapter(this, data));
    }
}
