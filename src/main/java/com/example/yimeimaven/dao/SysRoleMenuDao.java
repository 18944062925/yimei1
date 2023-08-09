package com.example.yimeimaven.dao;

import com.example.yimeimaven.entity.SysRoleMenuKey;
import org.springframework.stereotype.Repository;

@Repository
public interface SysRoleMenuDao {
    int deleteByPrimaryKey(SysRoleMenuKey key);

    int insert(SysRoleMenuKey record);

    int insertSelective(SysRoleMenuKey record);
}