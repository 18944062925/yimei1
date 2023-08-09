package com.example.yimeimaven.entity;

import java.io.Serializable;
import java.util.Date;
import lombok.Data;

/**
 * 定时任务调度日志表
 * sys_job_log
 */
@Data
public class SysJobLog implements Serializable {
    /**
     * 任务日志ID
     */
    private Long jobLogId;

    /**
     * 任务名称
     */
    private String jobName;

    /**
     * 任务组名
     */
    private String jobGroup;

    /**
     * 调用目标字符串
     */
    private String invokeTarget;

    /**
     * 日志信息
     */
    private String jobMessage;

    /**
     * 执行状态（0正常 1失败）
     */
    private String status;

    /**
     * 异常信息
     */
    private String exceptionInfo;

    /**
     * 创建时间
     */
    private Date createTime;

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
        SysJobLog other = (SysJobLog) that;
        return (this.getJobLogId() == null ? other.getJobLogId() == null : this.getJobLogId().equals(other.getJobLogId()))
            && (this.getJobName() == null ? other.getJobName() == null : this.getJobName().equals(other.getJobName()))
            && (this.getJobGroup() == null ? other.getJobGroup() == null : this.getJobGroup().equals(other.getJobGroup()))
            && (this.getInvokeTarget() == null ? other.getInvokeTarget() == null : this.getInvokeTarget().equals(other.getInvokeTarget()))
            && (this.getJobMessage() == null ? other.getJobMessage() == null : this.getJobMessage().equals(other.getJobMessage()))
            && (this.getStatus() == null ? other.getStatus() == null : this.getStatus().equals(other.getStatus()))
            && (this.getExceptionInfo() == null ? other.getExceptionInfo() == null : this.getExceptionInfo().equals(other.getExceptionInfo()))
            && (this.getCreateTime() == null ? other.getCreateTime() == null : this.getCreateTime().equals(other.getCreateTime()));
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getJobLogId() == null) ? 0 : getJobLogId().hashCode());
        result = prime * result + ((getJobName() == null) ? 0 : getJobName().hashCode());
        result = prime * result + ((getJobGroup() == null) ? 0 : getJobGroup().hashCode());
        result = prime * result + ((getInvokeTarget() == null) ? 0 : getInvokeTarget().hashCode());
        result = prime * result + ((getJobMessage() == null) ? 0 : getJobMessage().hashCode());
        result = prime * result + ((getStatus() == null) ? 0 : getStatus().hashCode());
        result = prime * result + ((getExceptionInfo() == null) ? 0 : getExceptionInfo().hashCode());
        result = prime * result + ((getCreateTime() == null) ? 0 : getCreateTime().hashCode());
        return result;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", jobLogId=").append(jobLogId);
        sb.append(", jobName=").append(jobName);
        sb.append(", jobGroup=").append(jobGroup);
        sb.append(", invokeTarget=").append(invokeTarget);
        sb.append(", jobMessage=").append(jobMessage);
        sb.append(", status=").append(status);
        sb.append(", exceptionInfo=").append(exceptionInfo);
        sb.append(", createTime=").append(createTime);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}