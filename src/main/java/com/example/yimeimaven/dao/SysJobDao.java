package com.example.yimeimaven.dao;

import com.example.yimeimaven.entity.SysJob;
import com.example.yimeimaven.entity.SysJobKey;
import org.springframework.stereotype.Repository;

@Repository
public interface SysJobDao {
    int deleteByPrimaryKey(SysJobKey key);

    int insert(SysJob record);

    int insertSelective(SysJob record);

    SysJob selectByPrimaryKey(SysJobKey key);

    int updateByPrimaryKeySelective(SysJob record);

    int updateByPrimaryKey(SysJob record);
}