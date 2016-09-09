package com.xorange.simplemvplogindemo.biz;

public interface IUserBiz {
    public void login(String username, String password, OnLoginListener loginListener);
}