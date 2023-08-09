package com.example.yimeimaven.dao;

import com.example.yimeimaven.entity.SysUserRoleKey;
import org.springframework.stereotype.Repository;

@Repository
public interface SysUserRoleDao {
    int deleteByPrimaryKey(SysUserRoleKey key);

    int insert(SysUserRoleKey record);

    int insertSelective(SysUserRoleKey record);
}