package com.example.yimeimaven.dao;

import com.example.yimeimaven.entity.Ordersetting;
import org.springframework.stereotype.Repository;

@Repository
public interface OrdersettingDao {
    int deleteByPrimaryKey(Long id);

    int insert(Ordersetting record);

    int insertSelective(Ordersetting record);

    Ordersetting selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(Ordersetting record);

    int updateByPrimaryKey(Ordersetting record);
}