package com.example.yimeimaven.dao;

import com.example.yimeimaven.entity.Member;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberDao {
    int deleteByPrimaryKey(Long id);

    int insert(Member record);

    int insertSelective(Member record);

    Member selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(Member record);

    int updateByPrimaryKey(Member record);
}