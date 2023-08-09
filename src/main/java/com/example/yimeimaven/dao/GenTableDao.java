package com.example.yimeimaven.dao;

import com.example.yimeimaven.entity.GenTable;
import org.springframework.stereotype.Repository;

@Repository
public interface GenTableDao {
    int deleteByPrimaryKey(Long tableId);

    int insert(GenTable record);

    int insertSelective(GenTable record);

    GenTable selectByPrimaryKey(Long tableId);

    int updateByPrimaryKeySelective(GenTable record);

    int updateByPrimaryKey(GenTable record);
}