package com.example.yimeimaven.dao;

import com.example.yimeimaven.entity.GenTableColumn;
import org.springframework.stereotype.Repository;

@Repository
public interface GenTableColumnDao {
    int deleteByPrimaryKey(Long columnId);

    int insert(GenTableColumn record);

    int insertSelective(GenTableColumn record);

    GenTableColumn selectByPrimaryKey(Long columnId);

    int updateByPrimaryKeySelective(GenTableColumn record);

    int updateByPrimaryKey(GenTableColumn record);
}