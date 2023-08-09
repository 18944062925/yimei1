package com.example.yimeimaven.entity;

import java.io.Serializable;
import java.util.Date;
import lombok.Data;

/**
 * 代码生成业务表字段
 * gen_table_column
 */
@Data
public class GenTableColumn implements Serializable {
    /**
     * 编号
     */
    private Long columnId;

    /**
     * 归属表编号
     */
    private String tableId;

    /**
     * 列名称
     */
    private String columnName;

    /**
     * 列描述
     */
    private String columnComment;

    /**
     * 列类型
     */
    private String columnType;

    /**
     * JAVA类型
     */
    private String javaType;

    /**
     * JAVA字段名
     */
    private String javaField;

    /**
     * 是否主键（1是）
     */
    private String isPk;

    /**
     * 是否自增（1是）
     */
    private String isIncrement;

    /**
     * 是否必填（1是）
     */
    private String isRequired;

    /**
     * 是否为插入字段（1是）
     */
    private String isInsert;

    /**
     * 是否编辑字段（1是）
     */
    private String isEdit;

    /**
     * 是否列表字段（1是）
     */
    private String isList;

    /**
     * 是否查询字段（1是）
     */
    private String isQuery;

    /**
     * 查询方式（等于、不等于、大于、小于、范围）
     */
    private String queryType;

    /**
     * 显示类型（文本框、文本域、下拉框、复选框、单选框、日期控件）
     */
    private String htmlType;

    /**
     * 字典类型
     */
    private String dictType;

    /**
     * 排序
     */
    private Integer sort;

    /**
     * 创建者
     */
    private String createBy;

    /**
     * 创建时间
     */
    private Date createTime;

    /**
     * 更新者
     */
    private String updateBy;

    /**
     * 更新时间
     */
    private Date updateTime;

    private static final long serialVersionUID = 1L;

    @Override
    public boolean equals(Object that) {
        if (this == that) {
            return true;
        }
        if (that == null) {
            return false;
        }
        if (getClass() != that.getClass()) {
            return false;
        }
        GenTableColumn other = (GenTableColumn) that;
        return (this.getColumnId() == null ? other.getColumnId() == null : this.getColumnId().equals(other.getColumnId()))
            && (this.getTableId() == null ? other.getTableId() == null : this.getTableId().equals(other.getTableId()))
            && (this.getColumnName() == null ? other.getColumnName() == null : this.getColumnName().equals(other.getColumnName()))
            && (this.getColumnComment() == null ? other.getColumnComment() == null : this.getColumnComment().equals(other.getColumnComment()))
            && (this.getColumnType() == null ? other.getColumnType() == null : this.getColumnType().equals(other.getColumnType()))
            && (this.getJavaType() == null ? other.getJavaType() == null : this.getJavaType().equals(other.getJavaType()))
            && (this.getJavaField() == null ? other.getJavaField() == null : this.getJavaField().equals(other.getJavaField()))
            && (this.getIsPk() == null ? other.getIsPk() == null : this.getIsPk().equals(other.getIsPk()))
            && (this.getIsIncrement() == null ? other.getIsIncrement() == null : this.getIsIncrement().equals(other.getIsIncrement()))
            && (this.getIsRequired() == null ? other.getIsRequired() == null : this.getIsRequired().equals(other.getIsRequired()))
            && (this.getIsInsert() == null ? other.getIsInsert() == null : this.getIsInsert().equals(other.getIsInsert()))
            && (this.getIsEdit() == null ? other.getIsEdit() == null : this.getIsEdit().equals(other.getIsEdit()))
            && (this.getIsList() == null ? other.getIsList() == null : this.getIsList().equals(other.getIsList()))
            && (this.getIsQuery() == null ? other.getIsQuery() == null : this.getIsQuery().equals(other.getIsQuery()))
            && (this.getQueryType() == null ? other.getQueryType() == null : this.getQueryType().equals(other.getQueryType()))
            && (this.getHtmlType() == null ? other.getHtmlType() == null : this.getHtmlType().equals(other.getHtmlType()))
            && (this.getDictType() == null ? other.getDictType() == null : this.getDictType().equals(other.getDictType()))
            && (this.getSort() == null ? other.getSort() == null : this.getSort().equals(other.getSort()))
            && (this.getCreateBy() == null ? other.getCreateBy() == null : this.getCreateBy().equals(other.getCreateBy()))
            && (this.getCreateTime() == null ? other.getCreateTime() == null : this.getCreateTime().equals(other.getCreateTime()))
            && (this.getUpdateBy() == null ? other.getUpdateBy() == null : this.getUpdateBy().equals(other.getUpdateBy()))
            && (this.getUpdateTime() == null ? other.getUpdateTime() == null : this.getUpdateTime().equals(other.getUpdateTime()));
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getColumnId() == null) ? 0 : getColumnId().hashCode());
        result = prime * result + ((getTableId() == null) ? 0 : getTableId().hashCode());
        result = prime * result + ((getColumnName() == null) ? 0 : getColumnName().hashCode());
        result = prime * result + ((getColumnComment() == null) ? 0 : getColumnComment().hashCode());
        result = prime * result + ((getColumnType() == null) ? 0 : getColumnType().hashCode());
        result = prime * result + ((getJavaType() == null) ? 0 : getJavaType().hashCode());
        result = prime * result + ((getJavaField() == null) ? 0 : getJavaField().hashCode());
        result = prime * result + ((getIsPk() == null) ? 0 : getIsPk().hashCode());
        result = prime * result + ((getIsIncrement() == null) ? 0 : getIsIncrement().hashCode());
        result = prime * result + ((getIsRequired() == null) ? 0 : getIsRequired().hashCode());
        result = prime * result + ((getIsInsert() == null) ? 0 : getIsInsert().hashCode());
        result = prime * result + ((getIsEdit() == null) ? 0 : getIsEdit().hashCode());
        result = prime * result + ((getIsList() == null) ? 0 : getIsList().hashCode());
        result = prime * result + ((getIsQuery() == null) ? 0 : getIsQuery().hashCode());
        result = prime * result + ((getQueryType() == null) ? 0 : getQueryType().hashCode());
        result = prime * result + ((getHtmlType() == null) ? 0 : getHtmlType().hashCode());
        result = prime * result + ((getDictType() == null) ? 0 : getDictType().hashCode());
        result = prime * result + ((getSort() == null) ? 0 : getSort().hashCode());
        result = prime * result + ((getCreateBy() == null) ? 0 : getCreateBy().hashCode());
        result = prime * result + ((getCreateTime() == null) ? 0 : getCreateTime().hashCode());
        result = prime * result + ((getUpdateBy() == null) ? 0 : getUpdateBy().hashCode());
        result = prime * result + ((getUpdateTime() == null) ? 0 : getUpdateTime().hashCode());
        return result;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", columnId=").append(columnId);
        sb.append(", tableId=").append(tableId);
        sb.append(", columnName=").append(columnName);
        sb.append(", columnComment=").append(columnComment);
        sb.append(", columnType=").append(columnType);
        sb.append(", javaType=").append(javaType);
        sb.append(", javaField=").append(javaField);
        sb.append(", isPk=").append(isPk);
        sb.append(", isIncrement=").append(isIncrement);
        sb.append(", isRequired=").append(isRequired);
        sb.append(", isInsert=").append(isInsert);
        sb.append(", isEdit=").append(isEdit);
        sb.append(", isList=").append(isList);
        sb.append(", isQuery=").append(isQuery);
        sb.append(", queryType=").append(queryType);
        sb.append(", htmlType=").append(htmlType);
        sb.append(", dictType=").append(dictType);
        sb.append(", sort=").append(sort);
        sb.append(", createBy=").append(createBy);
        sb.append(", createTime=").append(createTime);
        sb.append(", updateBy=").append(updateBy);
        sb.append(", updateTime=").append(updateTime);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}