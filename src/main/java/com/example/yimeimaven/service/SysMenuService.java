package com.example.yimeimaven.service;

import com.example.yimeimaven.entity.SysMenu;

import java.util.List;
import java.util.Map;

public interface SysMenuService {
    int deleteByPrimaryKey(Long menuId);

    int insert(SysMenu record);

    int insertSelective(SysMenu record);

    SysMenu selectByPrimaryKey(Long menuId);

    int updateByPrimaryKeySelective(SysMenu record);

    int updateByPrimaryKey(SysMenu record);
    List<Map<String,Object>> findMenuByUserId(int userId);
}
