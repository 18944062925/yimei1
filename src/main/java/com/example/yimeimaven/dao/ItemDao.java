package com.example.yimeimaven.dao;

import com.example.yimeimaven.entity.Item;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemDao {
    int deleteByPrimaryKey(Integer id);

    int insert(Item record);

    int insertSelective(Item record);

    Item selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Item record);

    int updateByPrimaryKey(Item record);
}