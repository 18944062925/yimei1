package com.example.yimeimaven;

import com.example.yimeimaven.entity.Member;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.shiro.crypto.hash.Md5Hash;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import redis.clients.jedis.Jedis;

import java.util.List;
import java.util.Set;


@SpringBootTest
class YimeiMavenApplicationTests {

    @Test
    void contextLoads() {
        Md5Hash md5Hash = new Md5Hash("123456");
        System.out.println(md5Hash);
    }
//jason
    @Test
    void test01() {
        Member member = new Member();
        member.setId(1L).setName("张三").setSex("女").setPhoneNumber("12345678912");
        ObjectMapper mapper = new ObjectMapper();
        try {
            String s = mapper.writeValueAsString(member);
            System.out.println(s);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }
@Test
    void test02(){
        //设置连接
    Jedis jedis = new Jedis("127.0.0.1",6379);
    System.out.println(jedis.ping());

    System.out.println(jedis.set("name","admin"));
    System.out.println(jedis.get("name"));
    //换库
    jedis.select(1);
    Set<String> keys = jedis.keys("*");
    for (String key:keys){
        System.out.println(key);
    }
    System.out.println(jedis.exists("name1"));
}
@Test
void test03(){
    System.out.println("-------操作string------");
    Jedis jedis = new Jedis("127.0.0.1",6379);
    System.out.println(jedis.ping());
    jedis.set("name","张三");
    jedis.set("age","13");
    jedis.set("sex","男");
    String name= jedis.get("name");
    Long move = jedis.move(name, 8);
    //清除一个库的所有数据
//    jedis.flushAll();
    System.out.println("姓名:"+jedis.get("name")+"年龄:"+jedis.get("age")+"性别:"+jedis.get("sex")+move);
    System.out.println("-------批量添加------");
    jedis.mset("name","李四","age","13","sex","女");
    System.out.println("-----批量获取值");
    List<String> mget = jedis.mget("name" ,"age" , "sex");
    System.out.println(mget.toString());
}

}
