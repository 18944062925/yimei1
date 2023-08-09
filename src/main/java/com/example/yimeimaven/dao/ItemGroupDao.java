package com.example.yimeimaven.dao;

import com.example.yimeimaven.entity.ItemGroup;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemGroupDao {
    int deleteByPrimaryKey(Integer id);

    int insert(ItemGroup record);

    int insertSelective(ItemGroup record);

    ItemGroup selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(ItemGroup record);

    int updateByPrimaryKey(ItemGroup record);
}