package com.example.yimeimaven.util;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Accessors(chain = true)
public class Page {
    int page;
    int limit;
    int code;
    String msg;
    int count;
    Object data;
    public static Page success(String msg,int count,Object data){
        Page page= new Page();
        page.setCode(0).setMsg(msg).setCount(count).setData(data);
        return page;
    }
    public static Page success(int count,Object data){
        Page page= new Page();
        page.setCode(0).setCount(count).setData(data);
        return page;
    }
    public static Page success(String msg,Object data){
        Page page= new Page();
        page.setCode(0).setMsg(msg).setData(data);
        return page;
    }
    public static Page success(String msg){
        Page page= new Page();
        page.setCode(0).setMsg(msg);
        return page;
    }
    public static Page success(Object data){
        Page page= new Page();
        page.setCode(0).setData(data);
        return page;
    }
    public static Page error(){
        Page page= new Page();
        page.setCode(1);
        return page;
    }
    public static Page error(String msg){
        Page page= new Page();
        page.setCode(1).setMsg(msg);
        return page;
    }
    public static Page error(String msg,Object data){
        Page page= new Page();
        page.setCode(1).setMsg(msg).setData(data);
        return page;
    }

}
