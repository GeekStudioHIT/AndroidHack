package com.xorange.httpposttest;

import java.io.BufferedOutputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;
import java.util.Map;

/**
 * Created by voidhug on 16/8/19.
 */

public class HTTPUtils {

    /**
     * 发送 POST 请求到服务器并返回服务器信息
     * @param params 请求体内容
     * @param encode 编码格式
     * @return 服务器返回信息
     * @throws MalformedURLException
     */
    public static String sendPostData(Map<String, String> params, String encode) throws MalformedURLException {
        byte[] data = getRequestData(params, encode).toString().getBytes();
        URL url = new URL("http://192.168.20.40:5000");
        HttpURLConnection httpURLConnection = null;
        try {
            httpURLConnection = (HttpURLConnection) url.openConnection();
            httpURLConnection.setConnectTimeout(3000);
            httpURLConnection.setDoInput(true);
            httpURLConnection.setDoOutput(true);
            httpURLConnection.setRequestMethod("POST");
            httpURLConnection.setUseCaches(false);
            httpURLConnection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
            httpURLConnection.setRequestProperty("Content-Length", String.valueOf(data.length));
            // 获得输入流，向服务器端写入数据。
            OutputStream outputStream = new BufferedOutputStream(httpURLConnection.getOutputStream());
            outputStream.write(data);
            outputStream.flush(); // flush() 之后才会写入

            int response = httpURLConnection.getResponseCode();
            if (response == HttpURLConnection.HTTP_OK) {
                InputStream inputStream = httpURLConnection.getInputStream();
                return dealResponseResult(inputStream);
            }
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            httpURLConnection.disconnect();
        }
        return "";
    }

    /**
     * 封装请求体信息
     * @param params 请求体内容
     * @param encode 编码格式
     * @return 请求体信息
     */
    public static StringBuffer getRequestData(Map<String, String> params, String encode) {
        StringBuffer stringBuffer = new StringBuffer();
        try {
            for (Map.Entry<String, String> entry : params.entrySet()) {
                stringBuffer.append(entry.getKey())
                        .append("=")
                        .append(URLEncoder.encode(entry.getValue(), encode))
                        .append("&");
            }
            stringBuffer.deleteCharAt(stringBuffer.length() - 1);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return stringBuffer;
    }

    /**
     * 处理服务器的响应结果（将输入流转换成字符串）
     * @param inputStream 服务器的输入流
     * @return 服务器响应结果字符串
     */
    public static String dealResponseResult(InputStream inputStream) {
        String resultData;
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        byte[] data = new byte[1024];
        int len;
        try {
            while ((len = inputStream.read(data)) != -1) {
                byteArrayOutputStream.write(data, 0, len);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        resultData = new String(byteArrayOutputStream.toByteArray());
        return resultData;
    }
}
