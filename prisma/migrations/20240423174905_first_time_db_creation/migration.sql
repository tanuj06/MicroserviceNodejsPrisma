BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[User] (
    [id] INT NOT NULL IDENTITY(1,1),
    [firstname] NVARCHAR(1000) NOT NULL,
    [lastname] NVARCHAR(1000),
    [username] NVARCHAR(1000) NOT NULL,
    [email] NVARCHAR(1000) NOT NULL,
    [roleid] INT NOT NULL,
    CONSTRAINT [User_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [User_email_key] UNIQUE NONCLUSTERED ([email])
);

-- CreateTable
CREATE TABLE [dbo].[Roles] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Roles_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Roles_name_key] UNIQUE NONCLUSTERED ([name])
);

-- CreateTable
CREATE TABLE [dbo].[JobPost] (
    [id] INT NOT NULL IDENTITY(1,1),
    [title] NVARCHAR(1000) NOT NULL,
    [content] NVARCHAR(1000) NOT NULL,
    [categoryId] INT NOT NULL,
    CONSTRAINT [JobPost_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[JobCategory] (
    [jobcategoryid] INT NOT NULL IDENTITY(1,1),
    [jobcategoryname] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [JobCategory_pkey] PRIMARY KEY CLUSTERED ([jobcategoryid])
);

-- AddForeignKey
ALTER TABLE [dbo].[User] ADD CONSTRAINT [User_roleid_fkey] FOREIGN KEY ([roleid]) REFERENCES [dbo].[Roles]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[JobPost] ADD CONSTRAINT [JobPost_categoryId_fkey] FOREIGN KEY ([categoryId]) REFERENCES [dbo].[JobCategory]([jobcategoryid]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
