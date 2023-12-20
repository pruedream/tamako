---
title: PageHelper的一个注意事项
date: 2023-12-10 23:40:42
permalink: /pages/b5d47d/
categories: 
  - 随笔
tags: 
  - 随笔
author: 
  name: pruedream
  link: https://github.com/pruedream
sidebar: auto
---


## 背景

最近在实习的时候使用PageHelper分页时，需要对数据进行二次处理，但是出现错误出现错误可以分页但是数据量错误 ，

## 原因

PageHelper中startPage开启分页方法只对后面的sql查询起作用，在开启分页后对list进行了操作 。其实这时候放入PageInfo的数据已经不是原始数据了，而是进过二次处理的数据，所有分页已经失效了

 

## 解决方法

直接对分页后的PageInfo对象中的数据进行操作 ，即对PageInfo里的list进行操作


```
@Override
@Transactional(rollbackFor = Exception.class)
public PageInfo getThemManageList(SysTopicManagerDTO sysTopicManagerDTO) {
    PageHelper.startPage(sysTopicManagerDTO.getPageNum(),sysTopicManagerDTO.getPageSize());
    SysTopicManageVo sysTopicManageVo=new SysTopicManageVo();
    BeanUtils.copyBeanProp(sysTopicManageVo,sysTopicManagerDTO);
    List<SysTopicManageVo> list = sysTopicManageMapper.list(sysTopicManageVo);
    PageInfo<SysTopicManageVo> page = new PageInfo(list);//不处理直接构建PageInfo
   
   //PageInfo里的list与下面的list引用的是同一个地址空间
    //赋值文件和图
   for(SysTopicManageVo s:list){
       List<BackgroundFile> file = backgroundService.findFile(s.getId());
       List<BackgroundFileHandle> files = new ArrayList<>();
       List<BackgroundFileHandle> previews = new ArrayList<>();
       for(BackgroundFile backgroundFile:file){
              if(backgroundFile.getModelType().equals(SysCommonConstant.FILE_MODEL_FILE)){
                  BackgroundFileHandle backgroundFileHandle = new BackgroundFileHandle();
                  backgroundFileHandle.setId(backgroundFile.getId());
                  backgroundFileHandle.setUrl(backgroundFile.getUrl());
                  files.add(backgroundFileHandle);
              }else {
                  BackgroundFileHandle backgroundFileHandle = new BackgroundFileHandle();
                  backgroundFileHandle.setId(backgroundFile.getId());
                  backgroundFileHandle.setUrl(backgroundFile.getUrl());
                  previews.add(backgroundFileHandle);
              }
          }

       s.setBackgroundPreviewList(previews);
       s.setFileList(files);
   }
    return page;
}
```

## 总结

以往是不会注意到会有这些问题的，还是那句话实践出真知。