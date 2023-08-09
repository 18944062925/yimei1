package com.example.yimeimaven.controller.login;


import com.example.yimeimaven.entity.Member;
import com.example.yimeimaven.entity.SysUser;
import com.example.yimeimaven.util.Page;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.*;
import org.apache.shiro.subject.Subject;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/login")
public class Login {
    @PostMapping
    public Page login(SysUser sysUser){
        System.out.println(sysUser);
        //获取当前正在使用的用户
        Subject currentUser = SecurityUtils.getSubject();
        if (!currentUser.isAuthenticated() ) {
            // 创建一个用户名密码验证令牌
            UsernamePasswordToken token = new UsernamePasswordToken(sysUser.getUserName(), sysUser.getPassword());
            try {
                // 登录
                currentUser.login(token);
            } catch ( UnknownAccountException uae ) {
                System.out.println("帐户异常");
                // 账号不正确
                return Page.error("账号不正确!!!");
            } catch ( IncorrectCredentialsException ice ) {
                System.out.println("密码异常");
                // 密码不正确
                return Page.error("密码不正确!!!");
            } catch ( LockedAccountException lae ) {
                System.out.println("锁定帐户");
                // 账户已锁定
                return Page.error("账户已锁定!!!");
            } catch ( AuthenticationException ae ) {
                System.out.println("身份验证异常");
                // 账号不正确
                return Page.error("登陆失败!!!");
            }
        }
        // 获取当前登录用户
        SysUser principal = (SysUser) currentUser.getPrincipal();
        return Page.success("登陆成功", principal);
    }

}
