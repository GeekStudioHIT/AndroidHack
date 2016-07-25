package com.xorange.simplemvplogindemo.biz;

import com.xorange.simplemvplogindemo.bean.User;

public interface OnLoginListener {
    void loginSuccess(User user);

    void loginFailed();
}
