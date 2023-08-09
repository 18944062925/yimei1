package com.example.yimeimaven.dao;

import com.example.yimeimaven.entity.SetmealGroup;
import org.springframework.stereotype.Repository;

@Repository
public interface SetmealGroupDao {
    int deleteByPrimaryKey(Long id);

    int insert(SetmealGroup record);

    int insertSelective(SetmealGroup record);

    SetmealGroup selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(SetmealGroup record);

    int updateByPrimaryKey(SetmealGroup record);
}