package com.example.yimeimaven.dao;

import com.example.yimeimaven.entity.Orders;
import org.springframework.stereotype.Repository;

@Repository
public interface OrdersDao {
    int deleteByPrimaryKey(Long id);

    int insert(Orders record);

    int insertSelective(Orders record);

    Orders selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(Orders record);

    int updateByPrimaryKey(Orders record);
}