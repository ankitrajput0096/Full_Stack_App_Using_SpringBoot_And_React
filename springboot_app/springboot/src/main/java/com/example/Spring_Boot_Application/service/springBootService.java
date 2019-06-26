package com.example.Spring_Boot_Application.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.Spring_Boot_Application.model.Topic;

@Service
public class springBootService {

	private ArrayList<Topic> topics=new ArrayList<>();
	
	public springBootService()
	{
		topics.add(new Topic("spring","springFramework","spring framework is awesome"));
	
		topics.add(new Topic("java","core java","java is very best in it's field"));
	
		topics.add(new Topic("javascript","basic javascript","javascript is not so good"));
	}
	
	public List<Topic> getAllTopics()
	{
		return topics;
	}
	public Topic getTopic(String id)
	{
		Topic topic=null;
		for(Topic t:topics)
		{
			if(t.getId().equals(id))
			{
				topic=t;
			}
		}
		return topic;
	}
	public void addTopic(Topic topic)
	{
		topics.add(topic);
	}
	public void updatetopic(Topic topic,String id)
	{
		int count=0;
		for(Topic t:topics)
		{
			if(t.getId().equals(id))
			{
				break;
			}
			else
				count+=1;
		}
		topics.set(count, topic);	
	}
	public void deletetopic(String id)
	{
		int count=0;
		for(Topic t:topics)
		{
			if(t.getId().equals(id))
			{
				break;
			}
			else
				count+=1;
		}
		topics.remove(count);	
	}
	
}
