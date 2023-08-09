package com.example.yimeimaven.dao;

import com.example.yimeimaven.entity.Setmeal;
import org.springframework.stereotype.Repository;

@Repository
public interface SetmealDao {
    int deleteByPrimaryKey(Long id);

    int insert(Setmeal record);

    int insertSelective(Setmeal record);

    Setmeal selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(Setmeal record);

    int updateByPrimaryKey(Setmeal record);
}