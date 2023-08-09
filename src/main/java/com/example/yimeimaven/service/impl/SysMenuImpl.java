package com.example.yimeimaven.service.impl;

import com.example.yimeimaven.dao.SysMenuDao;
import com.example.yimeimaven.entity.SysMenu;
import com.example.yimeimaven.service.SysMenuService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

@Service
public class SysMenuImpl implements SysMenuService {
@Resource
    SysMenuDao sysMenuDao;
    @Override
    public int deleteByPrimaryKey(Long menuId) {
        return 0;
    }

    @Override
    public int insert(SysMenu record) {
        return 0;
    }

    @Override
    public int insertSelective(SysMenu record) {
        return 0;
    }

    @Override
    public SysMenu selectByPrimaryKey(Long menuId) {
        return null;
    }

    @Override
    public int updateByPrimaryKeySelective(SysMenu record) {
        return 0;
    }

    @Override
    public int updateByPrimaryKey(SysMenu record) {
        return 0;
    }

    @Override
    public List<Map<String, Object>> findMenuByUserId(int userId) {
        return sysMenuDao.findMenuByUserId(userId);
    }
}
