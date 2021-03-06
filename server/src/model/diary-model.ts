/* eslint-disable @typescript-eslint/no-explicit-any */
import { DiaryParams, DiaryResponse } from 'Types/diary';
import { queryExecutor } from 'Utils/query-executor';

type AddDiaryParams = DiaryParams;

interface UpdateDiaryParams extends Pick<DiaryParams, 'title'| 'content'| 'date' | 'weather' | 'isPrivate' | 'image'> {
  diaryId: number;
}

class DiaryRepo {
  static async addDiary({ title, content, date, weather, isPrivate, image, userId }: AddDiaryParams): Promise<number> {
    const query = `
      INSERT INTO 
        diary(title, content, date, weather, is_private, image, user_id, created_at, updated_at) 
      VALUES('${title}', '${content}', '${date}', '${weather}', '${isPrivate}', '${image}', '${userId}', NOW(), NOW())
    `;
    return await queryExecutor(query);
  }

  static async findOneDiary(diaryId: number): Promise<DiaryResponse> {
    const query = `
      SELECT
        diary.id id,
        diary.title title,
        diary.content content,
        diary.date date,
        diary.weather weather,
        diary.is_private is_private,
        diary.image image,
        diary.created_at created_at,
        diary.updated_at updated_at,
        user.email user_email,
        user.nickname user_nickname,
        user.profile_image user_profile_image
      FROM 
        diary
      JOIN
        user
      ON
        diary.user_id=user.id
      WHERE
        diary.id=${diaryId}
    `;
    const result = await queryExecutor(query);
    return result[0];
  }

  static async findUserIdByDiaryId(diaryId: number): Promise<{ user_id: number }> {
    const query = `
      SELECT
        diary.user_id user_id
      FROM 
        diary
      WHERE
        diary.id=${diaryId}
    `;
    const result = await queryExecutor(query);
    return result[0];
  }

  static async findAllMyDiaries(userId: number): Promise<DiaryResponse[]> {
    const query = `
      SELECT
        diary.id id,
        diary.title title,
        diary.content content,
        diary.date date,
        diary.weather weather,
        diary.is_private is_private,
        diary.image image,
        diary.created_at created_at,
        diary.updated_at updated_at,
        user.email user_email,
        user.nickname user_nickname,
        user.profile_image user_profile_image
      FROM 
        diary
      JOIN
        user
      ON
        diary.user_id=${userId}
    `;
    const result = await queryExecutor(query);
    return result;
  }

  static async findAllPublicDiaries(): Promise<DiaryResponse[]> {
    const query = `
      SELECT
        diary.id id,
        diary.title title,
        diary.content content,
        diary.date date,
        diary.weather weather,
        diary.is_private is_private,
        diary.image image,
        diary.created_at created_at,
        diary.updated_at updated_at,
        user.email user_email,
        user.nickname user_nickname,
        user.profile_image user_profile_image
      FROM 
        diary
      JOIN
        user
      WHERE
          diary.is_private=0
    `;
    const result = await queryExecutor(query);
    return result;
  }

  static async updateDiary({ diaryId, title, content, date, weather, isPrivate, image }: UpdateDiaryParams): Promise<any> {
    const query = `
      UPDATE
        diary
      SET 
        title='${title}',
        content='${content}',
        date='${date}',
        weather='${weather}',
        is_private='${isPrivate}',
        image='${image}',
        updated_at=NOW()
      WHERE 
        id=${diaryId}
    `;
    const result = await queryExecutor(query);
    return result;
  }

  static async deleteDiary(diaryId: number): Promise<any> {
    const query = `
      DELETE FROM
        diary
      WHERE
        id=${diaryId}
    `;
    const result = await queryExecutor(query);
    return result;
  }
}

export default DiaryRepo;
