package com.example.yimeimaven.dao;

import com.example.yimeimaven.entity.SysUserPostKey;
import org.springframework.stereotype.Repository;

@Repository
public interface SysUserPostDao {
    int deleteByPrimaryKey(SysUserPostKey key);

    int insert(SysUserPostKey record);

    int insertSelective(SysUserPostKey record);
}