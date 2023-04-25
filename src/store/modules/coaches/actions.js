export default {
  registerCoach(context, data) {
    // 轉換資料格式
    const newCoach = {
      id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      description: data.des,
      hourlyRate: data.rate,
      areas: data.areas,
    };
    
    // 提交 commit 給 mutation
    context.commit('registerCoach', newCoach);
  }
};