package com.example.yimeimaven.dao;

import com.example.yimeimaven.entity.SysRole;
import org.springframework.stereotype.Repository;

@Repository
public interface SysRoleDao {
    int deleteByPrimaryKey(Long roleId);

    int insert(SysRole record);

    int insertSelective(SysRole record);

    SysRole selectByPrimaryKey(Long roleId);

    int updateByPrimaryKeySelective(SysRole record);

    int updateByPrimaryKey(SysRole record);
}