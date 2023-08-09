package com.example.yimeimaven.controller.Jump;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class HomePageController {
    /**
     *
     * @Description 跳转首页
     * @return
     */
    @RequestMapping("/")
    public String homePage(){
        Subject currentUser = SecurityUtils.getSubject();
        if(currentUser.isAuthenticated()){
            return "huaCaptcha";
        }
        return "login";
    }

    /**
     * 跳转到templates下的所有你想跳转的.html页面
     * @param page
     * @return
     */
    @RequestMapping("/redirect/{page}")
    public String one(@PathVariable String page){
        return page;
    }

    /**
     * 跳转到templates下的所有你想跳转任意一个文件夹下面的.html页面
     * @param pack
     * @param page
     * @return
     */
    @RequestMapping("/redirect/{pack}/{page}")
    public String one(@PathVariable String pack,@PathVariable String page){
        return pack+"/"+page;
    }
    //用户管理
    @GetMapping("/user/{page}")
    public String redirectSystemPage(@PathVariable String page){
        return "/user/"+page;
    }
    //角色管理
    @GetMapping("/role/{page}")
    public String redirectSystemPage1(@PathVariable String page){
        return "/role/"+page;
    }

@GetMapping("/loginOut")
    public String loginOut(){
    Subject currentUser = SecurityUtils.getSubject();
    currentUser.logout();
    return "login";
}
}
