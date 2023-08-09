package com.example.yimeimaven.controller.menu;

import com.example.yimeimaven.service.SysMenuService;
import com.example.yimeimaven.util.Page;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/menu")
public class MenuController {
    @Resource
    SysMenuService sysMenuService;
    @GetMapping("/{userId}")
    public Page initMenuByUserId(@PathVariable int userId){
        List<Map<String, Object>> menuByUserId = sysMenuService.findMenuByUserId(userId);
        return Page.success("登录成功",menuByUserId);
    }
}
