package com.example.yimeimaven.dao;

import com.example.yimeimaven.entity.SysLogininfor;
import org.springframework.stereotype.Repository;

@Repository
public interface SysLogininforDao {
    int deleteByPrimaryKey(Long infoId);

    int insert(SysLogininfor record);

    int insertSelective(SysLogininfor record);

    SysLogininfor selectByPrimaryKey(Long infoId);

    int updateByPrimaryKeySelective(SysLogininfor record);

    int updateByPrimaryKey(SysLogininfor record);
}