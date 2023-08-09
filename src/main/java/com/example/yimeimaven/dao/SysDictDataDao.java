package com.example.yimeimaven.dao;

import com.example.yimeimaven.entity.SysDictData;
import org.springframework.stereotype.Repository;

@Repository
public interface SysDictDataDao {
    int deleteByPrimaryKey(Long dictCode);

    int insert(SysDictData record);

    int insertSelective(SysDictData record);

    SysDictData selectByPrimaryKey(Long dictCode);

    int updateByPrimaryKeySelective(SysDictData record);

    int updateByPrimaryKey(SysDictData record);
}