package com.example.yimeimaven.shiro;


import com.example.yimeimaven.dao.SysUserDao;
import com.example.yimeimaven.entity.SysUser;
import org.apache.shiro.authc.*;
import org.apache.shiro.authc.credential.DefaultPasswordService;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;

import javax.annotation.Resource;


public class MyRealm extends AuthorizingRealm {
    @Resource
    SysUserDao sysUserDao;
    /**
     *
     * @param principalCollection
     * @return获取授权信息
     */
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
        System.out.println("获取授权信息");

        return null;
    }

    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) throws AuthenticationException {
        System.out.println("执行获取身份验证信息");
        UsernamePasswordToken token = (UsernamePasswordToken)authenticationToken;
        SysUser sysUser = new SysUser();
        sysUser.setUserName(token.getUsername());
        SysUser findall = sysUserDao.findall(sysUser);
        SimpleAuthenticationInfo simpleAuthenticationInfo = new SimpleAuthenticationInfo(findall,findall.getPassword(),getName());
        System.out.println(simpleAuthenticationInfo);
        return simpleAuthenticationInfo;
    }

}
