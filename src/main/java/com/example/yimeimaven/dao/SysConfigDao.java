package com.example.yimeimaven.dao;

import com.example.yimeimaven.entity.SysConfig;
import org.springframework.stereotype.Repository;

@Repository
public interface SysConfigDao {
    int deleteByPrimaryKey(Integer configId);

    int insert(SysConfig record);

    int insertSelective(SysConfig record);

    SysConfig selectByPrimaryKey(Integer configId);

    int updateByPrimaryKeySelective(SysConfig record);

    int updateByPrimaryKey(SysConfig record);
}