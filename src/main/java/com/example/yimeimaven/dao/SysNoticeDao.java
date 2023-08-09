package com.example.yimeimaven.dao;

import com.example.yimeimaven.entity.SysNotice;
import org.springframework.stereotype.Repository;

@Repository
public interface SysNoticeDao {
    int deleteByPrimaryKey(Integer noticeId);

    int insert(SysNotice record);

    int insertSelective(SysNotice record);

    SysNotice selectByPrimaryKey(Integer noticeId);

    int updateByPrimaryKeySelective(SysNotice record);

    int updateByPrimaryKeyWithBLOBs(SysNotice record);

    int updateByPrimaryKey(SysNotice record);
}