BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[User] (
    [UserID] INT NOT NULL IDENTITY(1,1),
    [FirstName] NVARCHAR(1000) NOT NULL,
    [LastName] NVARCHAR(1000) NOT NULL,
    [Email] NVARCHAR(1000) NOT NULL,
    [Password] NVARCHAR(1000) NOT NULL,
    [CreatedOn] DATETIME2 NOT NULL CONSTRAINT [User_CreatedOn_df] DEFAULT CURRENT_TIMESTAMP,
    [UpdatedOn] DATETIME2 NOT NULL,
    CONSTRAINT [User_pkey] PRIMARY KEY CLUSTERED ([UserID]),
    CONSTRAINT [User_Email_key] UNIQUE NONCLUSTERED ([Email])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH