package com.example.yimeimaven.dao;

import com.example.yimeimaven.entity.SysDictType;
import org.springframework.stereotype.Repository;

@Repository
public interface SysDictTypeDao {
    int deleteByPrimaryKey(Long dictId);

    int insert(SysDictType record);

    int insertSelective(SysDictType record);

    SysDictType selectByPrimaryKey(Long dictId);

    int updateByPrimaryKeySelective(SysDictType record);

    int updateByPrimaryKey(SysDictType record);
}