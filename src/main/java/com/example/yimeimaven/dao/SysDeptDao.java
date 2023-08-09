package com.example.yimeimaven.dao;

import com.example.yimeimaven.entity.SysDept;
import org.springframework.stereotype.Repository;

@Repository
public interface SysDeptDao {
    int deleteByPrimaryKey(Long deptId);

    int insert(SysDept record);

    int insertSelective(SysDept record);

    SysDept selectByPrimaryKey(Long deptId);

    int updateByPrimaryKeySelective(SysDept record);

    int updateByPrimaryKey(SysDept record);
}