package com.xorange.chatlistview;

import android.graphics.Bitmap;

/**
 * Created by voidhug on 16/7/5.
 */

public class ChatListViewItemBean {
    private int type;
    private String text;
    private Bitmap icon;

    public ChatListViewItemBean() {

    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Bitmap getIcon() {
        return icon;
    }

    public void setIcon(Bitmap icon) {
        this.icon = icon;
    }
}
