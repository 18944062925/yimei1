package com.example.yimeimaven.dao;

import com.example.yimeimaven.entity.SysUser;
import org.springframework.stereotype.Repository;

@Repository
public interface SysUserDao {
    int deleteByPrimaryKey(Long userId);

    int insert(SysUser record);

    int insertSelective(SysUser record);

    SysUser selectByPrimaryKey(Long userId);

    int updateByPrimaryKeySelective(SysUser record);

    int updateByPrimaryKey(SysUser record);
    SysUser findall(SysUser record);
}