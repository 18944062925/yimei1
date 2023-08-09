package com.example.yimeimaven.dao;

import com.example.yimeimaven.entity.SysJobLog;
import org.springframework.stereotype.Repository;

@Repository
public interface SysJobLogDao {
    int deleteByPrimaryKey(Long jobLogId);

    int insert(SysJobLog record);

    int insertSelective(SysJobLog record);

    SysJobLog selectByPrimaryKey(Long jobLogId);

    int updateByPrimaryKeySelective(SysJobLog record);

    int updateByPrimaryKey(SysJobLog record);
}