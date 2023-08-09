package com.example.yimeimaven.dao;

import com.example.yimeimaven.entity.ItemAndGroup;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemAndGroupDao {
    int deleteByPrimaryKey(Long id);

    int insert(ItemAndGroup record);

    int insertSelective(ItemAndGroup record);

    ItemAndGroup selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(ItemAndGroup record);

    int updateByPrimaryKey(ItemAndGroup record);
}